import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
const Title = ({ title }) => {
  return (
    <Helmet>
      <title>Task Manager | {title}</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  );
};
Title.propTypes={
    title: PropTypes.string,
}
export default Title;
