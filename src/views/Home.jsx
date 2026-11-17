import {useState, useEffect} from 'react';
import MediaRow from '../components/MediaRow';
import {fetchData} from '../utils/fetchData';

const MEDIA_API = import.meta.env.VITE_MEDIA_API;
const AUTH_API = import.meta.env.VITE_AUTH_API;

const Home = () => {
  // ensimmäisessä renderöinnissä dataa ei ole vielä haettu
  // siksi tyhjä array
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const getMedia = async () => {
      try {
        // 1. haetaan ensin pelkkä mediadata
        const mediaFiles = await fetchData(MEDIA_API + '/media');
        // 2. lisätään jokaiselle mediatiedostolle username ominaisuus hakemalla
        // fetchillä auth apista jokaisen mediatiedoston omistaja user_id:n perusteella
        // yksi kerrallaan. Kun kaikki pyynnöt ovat valmistuneet, promise.all() kaikkien pyyntöjen
        // tulokset yhtenä taulukkona
        const mediaFilesWithUsernames = await Promise.all(
          mediaFiles.map(async (mediaFile) => {
            const user = await fetchData(
              `${AUTH_API}/users/${mediaFile.user_id}`,
            );
            return {...mediaFile, username: user.username};
          }),
        );
        // 3. päivitetään state, kun kaikki pyynnöt ovat valmistuneet
        setMediaArray(mediaFilesWithUsernames);
      } catch (error) {
        console.error('Error fetching media:', error);
      }
    };

    getMedia();
  }, []);

  console.log(mediaArray);

  return (
    <>
      <h2>My Media</h2>
      <table>
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Description</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Size</th>
            <th>Type</th>
            <th>Display</th>
          </tr>
        </thead>
        <tbody>
          {mediaArray.map((item) => (
            <MediaRow key={item.media_id} item={item} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
