// import { connect } from 'react-redux';

import { useSelector } from 'react-redux';

import UsersShow from '../components/UsersShow/UsersShow';
import { selectUsersItemsById, selectUsersLoading } from '../selectors';

// import { selectUsersItemsById, selectUsersLoading } from '../selectors';

// function mapStateToProps(state, ownProps) {
//   return {
//     user: selectUsersItemsById(state, ownProps.match.params.id),
//     loading: selectUsersLoading(state),
//   };
// }

// export default connect(mapStateToProps)(UsersShow);


export default function UsersShowContainer({match}) {
  const user = useSelector((state) => selectUsersItemsById(state, match.params.id));
  const loading = useSelector(selectUsersLoading);

  return <UsersShow user={user} loading={loading} />
}
