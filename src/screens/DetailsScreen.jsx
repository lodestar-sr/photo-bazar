import React from 'react';
import userImage from 'assets/img/user.svg';
import backImage from 'assets/img/back.svg';
import { useNavigate, useParams } from 'react-router-dom';
import useImage from 'hooks/useImage';
import Loading from 'components/Loading';
import 'assets/sass/DetailsScreen.scss';

function DetailsScreen() {
  const navigate = useNavigate();
  const params = useParams();
  const { loading, photo } = useImage(params.id);

  if (loading) return <Loading fullPage />;

  return (
    <div className="details_page">
      <div>
        <img src={photo.largeImageURL} alt="" />
      </div>

      <div className="details">
        <div className="d-flex justify-content-between mb-2">
          <div className="user_info">
            <img src={photo.userImageURL || userImage} alt="user" />
            <p>{photo.user}</p>
          </div>

          <button className="back_button" onClick={() => navigate('/')}>
            <img src={backImage} alt="" />
            Go Back
          </button>
        </div>

        <table className="table table-striped table-bordered" id="details">
          <tbody>
            <tr>
              <th>Height </th>
              <td> {photo.imageHeight}</td>
            </tr>
            <tr>
              <th>Width </th>
              <td> {photo.imageWidth}</td>
            </tr>
            <tr>
              <th>Views </th>
              <td> {photo.views} </td>
            </tr>
            <tr>
              <th>Downloads</th>
              <td> {photo.downloads}</td>
            </tr>
            <tr>
              <th>Tags</th>
              <td> {photo.tags}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailsScreen;
