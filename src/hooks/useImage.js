import axios from "axios";

const { useState, useEffect, useCallback } = require("react");

const useImage = (id) => {
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getPhoto = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await axios({
        method: "GET",
        url: 'https://pixabay.com/api/?key=26589221-dee12ea42ed0623236c4c2d52',
        params: {
          id
        }
      });
      setPhoto(result.data.hits[0]);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  }, [id]);

  useEffect(() => {
    getPhoto();
  }, [getPhoto]);

  return { photo, loading, error };
}

export default useImage;