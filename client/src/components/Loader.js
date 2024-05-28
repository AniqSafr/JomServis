import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center', /* Center horizontally */
      alignItems: 'center', /* Center vertically */
      height: '100vh', /* Set the height of the container to full viewport height */
      width: '100%', /* Ensure the container spans the full width */
    }}>
      <Spinner animation="grow" />
    </div>
  );
}

export default Loading;
