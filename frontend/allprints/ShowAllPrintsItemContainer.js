// import { connect } from 'react-redux';
// import { createLike, deleteLike, fetchLikes } from './../actions/like_actions';
// import { fetchPrint, fetchPrints } from './../actions/print_actions';
// import { fetchUser } from './../actions/session_actions';
// import ShowAllPrintsItem from './ShowAllPrintsItem';

// const mapStateToProps = (state, ownProps) => {
//   // debugger
//   let collectionId = Number(ownProps.match.params.collectionId);
//   return {
//     collection: state.entities.collections[collectionId],
//     print_id: ownProps.print.print_id,
//     print: state.entities.prints[ownProps.print.print_id] || {id: null, title: '', user_likes: []},
//     prints: state.entities.prints,
//     users: state.entities.users,
//     currentUser: state.session.id,
//     likes: state.entities.likes.filter((like) => { return like.print_id === ownProps.print.print_id }),
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   receiveUser: (id) => dispatch(fetchUser(id)),
//   createLike: (print) => dispatch(createLike(print)),
//   deleteLike: (print) => dispatch(deleteLike(print)),
//   fetchLikes: () => dispatch(fetchLikes()),
//   fetchPrint: id => dispatch(fetchPrint(id)),
//   fetchPrints: () => dispatch(fetchPrints()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ShowAllPrintsItem);
