// eslint-disable-next-line react/prop-types
const Form = ({ fetchCountries }) => {
  return (
    <form>
      find countries <input type="text" onChange={fetchCountries} />
    </form>
  );
};

export default Form;
