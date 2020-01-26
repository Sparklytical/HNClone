/* eslint-disable react/prop-types */
import React from 'react';
import ListItem from 'components/ListItem';

import { ListWrapper } from './styles';

// class List extends Component {
//   render() {
//     const { stories } = this.props;
//     return (
//       <ListWrapper>
//         {stories.map(story => (
//           <ListItem key={story.id} {...story} />
//         ))}
//         <ListItem />
//       </ListWrapper>
//     );
//   }
// }
// List.propTypes = {
//   stories: PropTypes.array.isRequired,
// };

const List = ({ stories }) => (
  <ListWrapper>
    {stories.map(story => (
      <ListItem key={story.id} {...story} />
    ))}
  </ListWrapper>
);
export default List;
