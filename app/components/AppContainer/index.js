import { connect } from 'react-redux';
import actions from 'store/story/actions';
import { hasMoreStoriesSelector } from 'store/story/selectors';
import AppContainer from './AppContainer';

const mapStateToProps = state => ({
  theme: state.app.theme,
  stories: state.story.stories,
  page: state.story.page,
  storyIds: state.story.storyIds,
  isFetching: state.story.isFetching,
  hasMoreStoriesSelector: hasMoreStoriesSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
  fetchStories: ({ storyIds, page }) =>
    dispatch(actions.fetchStories({ storyIds, page })),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
