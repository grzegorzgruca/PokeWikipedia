import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import pokeApiFetch from "../../globalComponents/api/PokeApiFetch";

function PokemonMainForm(props) {
  const navigateTo = useNavigate();
  const cutString = (e) => e.toLowerCase().replace(" ", "-").replace(".", "");
  async function validateForm(e) {
    let errors = {};
    if (!isNaN(Number(e.name))) {
      errors.name = "Pokemon name required.";
      return errors;
    }
    if (e.name === "") {
      errors.name = "Blank field.";
    }
    let pokemonName = cutString(e.name);
    try {
      let pokemon = await pokeApiFetch(pokemonName, "textData");
    } catch (error) {
      errors.name = "Invalid Pokemon name.";
    }
    return errors;
  }
  function submitForm(e) {
    console.log(navigateTo(`/pokemon/${cutString(e.name)}`));
  }
  return (
    <div id="search" className="mainform">
      <p className="mainform__title">Search for Pokemon</p>
      <h1 className="mainform__desc">Discover new statistics</h1>
      <Formik
        validateOnBlur={false}
        initialValues={{ name: "" }}
        onSubmit={(values) => {
          submitForm(values);
        }}
        validate={(e) => validateForm(e)}
        validateOnChange={false}
      >
        {({ isSubmitting }) => (
          <Form className="form">
            <Field
              placeholder="Enter the name of Pokemon"
              className="mainform__field"
              type="text"
              name="name"
            />
            {/* <ErrorMessage name="name" component={<div>NO ELo</div>} /> */}
            <button
              disabled={isSubmitting}
              className="mainform__submit-btn"
              type="submit"
            >
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default PokemonMainForm;
