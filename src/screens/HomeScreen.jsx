import Images from 'components/Images';
import Loading from 'components/Loading';
import LoadMore from 'components/LoadMore';
import Search from 'components/Search';
import useImages from 'hooks/useImages';
import React, { useState } from 'react';

function HomeScreen() {
  const [query, setQuery] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const { hasMore, photos, loading } = useImages(query, pageNumber);

  return (
    <div className="my-4">
      <Search query={query} setQuery={setQuery} />
      <Images loading={loading} images={photos} />
      {loading && <Loading />}

      <LoadMore
        disabled={!Boolean(hasMore)}
        loading={loading}
        onClick={() => setPageNumber(pageNumber + 1)}
      />
    </div>
  );
}

export default HomeScreen;
