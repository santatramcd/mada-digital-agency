import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    budget: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validationErrors, setValidationErrors] = useState({});

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Réinitialiser l'erreur spécifique au champ modifié
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Fonction pour valider le formulaire
  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Le nom est obligatoire.";
    if (!formData.email.trim()) errors.email = "L'email est obligatoire.";
    if (!formData.type.trim())
      errors.type = "Le type de projet est obligatoire.";
    if (!formData.budget.trim()) errors.budget = "Le budget est obligatoire.";
    if (!formData.message.trim())
      errors.message = "Le message est obligatoire.";
    return errors;
  };

  // Fonction pour soumettre le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des champs
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    const airtableAPIKey =
      "patkCxg0ZmgltSCFs.8821ab3b4896c7795957efc0fbbc69ca233078165349aa1e67883af167a2ea87"; // Remplacez par votre clé API Airtable
    const airtableBaseId = "appTVkIAf30WtN760"; // Remplacez par l'ID de votre base
    const airtableTableName = "Envoie"; // Remplacez par le nom de votre table

    const url = `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`;

    const record = {
      fields: {
        Nom: formData.name,
        Email: formData.email,
        Type: formData.type,
        Budget: parseFloat(formData.budget),
        Message: formData.message,
      },
    };

    try {
      await axios.post(
        url,
        { records: [record] },
        {
          headers: {
            Authorization: `Bearer ${airtableAPIKey}`,
            "Content-Type": "application/json",
          },
        }
      );
      // Afficher un message de succès et réinitialiser le formulaire
      setSuccessMessage("Formulaire soumis avec succès !");
      setErrorMessage("");
      setValidationErrors({});
      setFormData({
        name: "",
        email: "",
        type: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire :", error);
      // Afficher un message d'erreur
      setErrorMessage(
        "Une erreur s'est produite lors de l'envoi. Veuillez réessayer."
      );
      setSuccessMessage("");
    }
  };
  return (
    <>
      <div>
        <section id="contact" className="contact section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>Contact Us</p>
          </div>

          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-4" data-aos="fade-up" data-aos-delay="200">
              <iframe
                style={{ border: 0, width: "100%", height: "270px" }}
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                frameborder="0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="row gy-4">
              <div className="col-lg-4">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="bi bi-geo-alt flex-shrink-0"></i>
                  <div>
                    <h3>Address</h3>
                    <p>Madagascar , Antananarivo , 101</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="bi bi-telephone flex-shrink-0"></i>
                  <div>
                    <h3>Call Us</h3>
                    <p>+261 32 46 658 49</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <i className="bi bi-envelope flex-shrink-0"></i>
                  <div>
                    <h3>Email Us</h3>
                    <p>info@santatra-michado.com</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8">
                <form
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  onSubmit={handleSubmit}
                  id="contactForm"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                      />
                      {validationErrors.name && (
                        <small className="text-danger">
                          {validationErrors.name}
                        </small>
                      )}
                    </div>

                    <div className="col-md-6 ">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Votre email"
                        className="form-control"
                      />
                      {validationErrors.email && (
                        <small className="text-danger">
                          {validationErrors.email}
                        </small>
                      )}
                    </div>

                    <div className="col-md-6">
                      <input
                        type="text"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        placeholder="E-commerce, Blog, Site vitrine..."
                        className="form-control"
                      />
                      {validationErrors.type && (
                        <small className="text-danger">
                          {validationErrors.type}
                        </small>
                      )}
                    </div>

                    <div className="col-md-6">
                      <input
                        type="number"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="Budget"
                        className="form-control"
                      />
                      {validationErrors.budget && (
                        <small className="text-danger">
                          {validationErrors.budget}
                        </small>
                      )}
                    </div>

                    <div className="col-md-12">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Votre message"
                        className="form-control"
                        rows="6"
                      />
                      {validationErrors.message && (
                        <small className="text-danger">
                          {validationErrors.message}
                        </small>
                      )}
                    </div>

                    <div className="col-md-12 text-center">
                      {successMessage && (
                        <div className="alert alert-info" role="alert">
                          {successMessage}
                        </div>
                      )}
                      {errorMessage && (
                        <div className="alert alert-danger" role="alert">
                          {errorMessage}
                        </div>
                      )}

                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
