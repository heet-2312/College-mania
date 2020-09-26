import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const FormPage = () => {
return (
<MDBContainer>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Product Detail Form</p>
        <label htmlFor="defaultFormContactNameEx" className="grey-text">
          Your name
        </label>
        <input type="text" id="defaultFormContactNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
          Contact No
        </label>
        <input type="email" id="defaultFormContactEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactSubjectEx" className="grey-text">
          Price
        </label>
        <input type="text" id="defaultFormContactSubjectEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
          Description
        </label>
        <textarea type="text" id="defaultFormContactMessageEx" className="form-control" rows="3" />
        <div className="text-center mt-4">
                  <MDBBtn outline type="submit"className="btn btn-primary">
                    Send
                   
                  </MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      );
    };

    export default FormPage; 