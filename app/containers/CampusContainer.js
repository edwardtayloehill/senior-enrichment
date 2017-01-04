// I could not for the life of me get my connector to work from here...
// went ahead and put the connector in the actual components... seems to work
// if I have time I will come back and fix this.

///connector///
import { connect } from 'react-redux';
import Campuses from '../components/Campuses'

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  };
};

export default connect(
	mapStateToProps
)(Campuses);


// import { connect } from 'react-redux';
// import { toggleSong } from '../action-creators/player';
// import Songs from '../components/Songs';
//
// const mapStateToProps = (state, ownProps) => {
//   const player = state.player;
//
//   return {
//     songs: ownProps.songs,
//     currentSong: player.currentSong,
//     isPlaying: player.isPlaying
//   };
// };
//
// const mapDispatchToProps = (dispatch) => {
//   return {
//     toggleOne (song, list) {
//       dispatch(toggleSong(song, list));
//     }
//   }
// }
//
// export default (connect)(
//   mapStateToProps,
//   mapDispatchToProps
// )(Songs);
