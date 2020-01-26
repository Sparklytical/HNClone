import { connect } from 'react-redux';
import actions from 'store/story/actions';
import AppContainer from './AppContainer';

const mapStateToProps = state => ({
  theme: state.app.theme,
  stories: state.story.stories,
  page: state.story.page,
  storyIds: state.story.storyIds,
  isFetching: state.story.isFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
