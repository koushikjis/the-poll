import React, { useContext, useState } from 'react';
import _ from 'lodash';
import AppContext from '../context/AppContext';

const CreatePoll: React.FC = () => {
  
  const [candidates, setCandidates] = useState<Array<{ photo: File | null; name: string }>>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [fieldRendered, setFieldRendered] = useState(false)

  const context = useContext(AppContext)
  const [numOfCandidates, setNumOfCandidates] = useState(context?.state.pollCount|| 0);

  const handleNumOfCandidatesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumOfCandidates(parseInt(e.target.value, 10));
    setCandidates(Array.from({ length: parseInt(e.target.value, 10) }, () => ({ photo: null, name: '' })));
    if (e.target.value) {
      context?.dispatch({type: "SET_POLL_COUNT", payload: +e.target.value })
      setTimeout(()=>setFieldRendered(true), 20)
    }
  };

  const handleCandidatePhotoChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newCandidates = [...candidates];
    newCandidates[index].photo = e.target.files ? e.target.files[0] : null;
    setCandidates(newCandidates);
  };

  const handleCandidateNameChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    let newCandidates = [...candidates];
    if (!newCandidates.length) {
        newCandidates = []
        newCandidates.push({name:'', photo:null})
    }
    newCandidates[index].name = e.target.value;
    setCandidates(newCandidates);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    if (candidates.length > 0) {
      console.log('Form submitted:', candidates);
      // Reset form fields
      setNumOfCandidates(0);
      setCandidates([]);

      setFormSubmitted(true);

      // Clear the message after a certain period
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }
  };

  const renderCandidateFields = () => {
    return _.times(numOfCandidates, (index: number) => (
      <div key={index} className="mt-3 mb-3 border border-secondary rounded">
        <div className="form-group m-2">
          <label>Candidate Photo:&nbsp;</label>
          <input className="form-control-file" name='candidate_photo_${index}' type="file" onChange={(e) => handleCandidatePhotoChange(e, index)} />
        </div>
        <div className="form-group m-2">
          <label>Candidate Name:</label>
          <input className="form-control" name='candidate_name_${index}' type="text" onChange={(e) => handleCandidateNameChange(e, index)} />
        </div>
      </div>
    ));
  };

  if(context?.state.pollCount) setTimeout(()=>setFieldRendered(true), 1)

  return (
    <div className="container mt-4">
      <h2>Create Poll</h2>
      <form onSubmit={handleSubmit}>
        {!fieldRendered && (<div className="form-group mb-3">
          <label>How many candidates?</label>
          <input className="form-control" name='how_many' type="number" min="0" value={numOfCandidates} onChange={handleNumOfCandidatesChange} />
        </div>)}
        {renderCandidateFields()}
        <button className="btn btn-primary" type="submit">Submit</button>
      </form>
      {formSubmitted && (
        <div className="alert alert-success alert-dismissible fade show mt-3" role="alert">
          Form submitted successfully!
          <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
      )}
    </div>
  );
};

export default CreatePoll;
