import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import Gallery from "../Components/Gallery";
import { ImImages, ImHeart } from "react-icons/im";

const Home = ({ favoriteDogs, setFavoriteDogs, storeDogs,notify }) => {
    const [idList, setIdList] = useState(0);
    const [dogsList, setDogsList] = useState([]);
    const [selectedImage, setSelectedImage] = useState(0);

    const VALIDA_DOG_FORMATS = ['jpg', 'png', 'gif', 'jpeg'];

    useEffect(() => {

        if (dogsList.length < 6) {
            getDogList();
        }
        setIdList(idList + 1);
    }, [dogsList]);


    useEffect(() => {
        setIdList(idList + 1);
    }, [favoriteDogs]);

    const saveDogsList = (dogsList) => {
        let newList = favoriteDogs;
        newList.push(dogsList);
        const strigifiedDogList = JSON.stringify(newList);
        
        storeDogs(strigifiedDogList);
        setFavoriteDogs([...newList]);
    }

    const getDogList = () => {
        fetch('https://random.dog/woof.json')
            .then(response => response.json())
            .then(response => {
                const splitDogs = response.url.split('.');
                const splitDogsLength = splitDogs.length;
                const dogsFormat = splitDogs[splitDogsLength - 1];
                let newDogList = dogsList;

                if (VALIDA_DOG_FORMATS.includes(dogsFormat)){
                    
                    newDogList.push(response);
                    setDogsList(prev => {
                        prev = newDogList;
                        return [...prev];
                    });
                } else {
                    getDogList();
                    return;
                }
            })

    }

return (<div key={idList} style={{height:'100%'}}>
    {dogsList.length > 0 && <Gallery
        onChange={(imageIndex) => { setSelectedImage(imageIndex) }}
    >
        {
            dogsList.map((dog, index) => (
                <div style={{
                    height: 'auto',
                    justifyContent: 'center',
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <img key={index} src={dog.url} style={{ width: '50%' }} />
                </div>))
        }
    </Gallery>}

    {/* Button to add the selected dog to the favorite list */}
    <div
        style={{
            height: 'auto',
            justifyContent: 'space-evenly',
            alignContent: 'center',
            display: 'flex',
            alignItems: 'center'
        }}
    >
        <Button
            onClick={() => {
                saveDogsList(dogsList[selectedImage]);
                notify('Dog added successfully to your favorite dogs');
            }}
            icon={<ImHeart />}
            style={{ background: '#23C973', color: 'white' }}
            text={'Save to Favorites'}
        />

        <Button
            onClick={() => {
                setDogsList([]);
                notify('Getting 6 cute dogs for you');
            }}
            icon={<ImImages />}
            style={{ background: '#0C21D3', color: 'white' }}
            text={'Refresh'}
        />
        
    </div>
    

</div>)
};

export default Home