const { default: axios } = require("axios");
const { useEffect, useState } = require("react");

const useImages = (query, page = 1) => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setPhotos([]);
  }, [query]);

  useEffect(() => {
    let cancel;

    const fetchData = async () => {
      setLoading(true);
      try {
        const result = await axios({
          method: "GET",
          url: `https://pixabay.com/api/?key=26589221-dee12ea42ed0623236c4c2d52`,
          params: {
            q: query,
            page,
            per_page: 15,
          },
          cancelToken: new axios.CancelToken(c => cancel = c)
        });

        const data = photos;
        data.push(...result.data.hits);
        setPhotos(data);
        setHasMore(result.data.total > page);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(true);
        setLoading(false);
      }
    };

    fetchData();
    return () => cancel();
  }, [query, page, photos]);

  return { photos, loading, hasMore, error };
}

export default useImages;