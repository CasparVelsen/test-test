import styled from 'styled-components';
import moment from 'moment';

import { useState } from 'react';

import SubmitButton from './Button';

export default function EntryForm({ onCreateCard }) {
  const [formData, setFormData] = useState('');

  const handleOnChange = event => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  function handleSubmit(event) {
    event.preventDefault();
    console.log('formData', formData);
    onCreateCard(formData);
  }

  return (
    <Form
      aria-labelledby="Create your fishing experience"
      onSubmit={handleSubmit}
      autoComplete="off"
      labeltext="form"
    >
      <small>general infos</small>
      <Fieldset>
        <Part>
          <label htmlFor="date">Date</label>
          <Input
            id="date"
            name="date"
            type="date"
            max={moment().format('YYYY-MM-DD')}
            onChange={handleOnChange}
            required
          />
        </Part>
        <Part>
          <label htmlFor="target">Target species</label>
          <Input
            id="target"
            name="target"
            type="text"
            maxLength={25}
            onChange={handleOnChange}
            required
          />
        </Part>
        <Part>
          <label htmlFor="time">From</label>
          <Input
            id="time"
            name="time"
            type="time"
            step={1800}
            onChange={handleOnChange}
            required
          />
        </Part>
        <Part>
          <label htmlFor="timeto">To</label>
          <Input
            id="timeto"
            name="timeto"
            type="time"
            step={1800}
            onChange={handleOnChange}
            required
          />
        </Part>
      </Fieldset>
      <small>water</small>
      <Fieldset>
        <Part>
          <label htmlFor="water">water</label>
          <Input
            id="water"
            name="water"
            type="text"
            maxLength={25}
            onChange={handleOnChange}
            placeholder="water"
            required
          />
        </Part>
        <Part>
          <label htmlFor="stretch">Stretch</label>
          <Input
            id="stretch"
            name="stretch"
            type="text"
            maxLength={100}
            onChange={handleOnChange}
          />
        </Part>
        <Part>
          <label htmlFor="watertemp">Water temperature</label>
          <Input
            id="watertemp"
            name="watertemp"
            type="number"
            min={-5}
            max={50}
            onChange={handleOnChange}
            placeholder="°C"
          />
        </Part>
        <Part>
          <label htmlFor="watercolor">Water Color</label>
          <select
            id="watercolor"
            name="watercolor"
            type="text"
            onChange={handleOnChange}
          >
            <option value="cloudy">cloudy</option>
            <option value="normal">normal</option>
            <option value="clear">clear</option>
          </select>
        </Part>
        <Part>
          <label htmlFor="waterlevel">Water Level</label>
          <select
            id="waterlevel"
            name="waterlevel"
            type="text"
            onChange={handleOnChange}
          >
            <option value="low">low</option>
            <option value="normal">normal</option>
            <option value="high">high</option>
          </select>
        </Part>
      </Fieldset>
      <small>weather</small>
      <Fieldset>
        <Part>
          <label htmlFor="weather">Weather</label>
          <Input
            id="weather"
            name="weather"
            type="text"
            maxLength={100}
            onChange={handleOnChange}
          />
        </Part>
        <Part>
          <label htmlFor="temperature">Temperature</label>
          <Input
            id="temperature"
            name="temperature"
            type="number"
            min={-50}
            max={50}
            maxLength={100}
            onChange={handleOnChange}
            placeholder="°C"
          />
        </Part>
        <Part>
          <label htmlFor="airpressure">Air pressure</label>
          <Input
            id="airpressure"
            name="airpressure"
            type="number"
            min={850}
            max={1150}
            onChange={handleOnChange}
            placeholder="850 - 1150"
          />
        </Part>
        <Part>
          <label htmlFor="moon">Moon phase</label>
          <Input
            id="moon"
            name="moon"
            type="text"
            maxLength={100}
            onChange={handleOnChange}
          />
        </Part>
        <Part>
          <label htmlFor="wind">Wind direction</label>
          <Input
            id="wind"
            name="wind"
            type="text"
            maxLength={100}
            onChange={handleOnChange}
          />
        </Part>
        <Part>
          <label htmlFor="windspeed">Wind speed</label>
          <Input
            id="windspeed"
            name="windspeed"
            type="number"
            min={0}
            onChange={handleOnChange}
            placeholder="min. 0kmH"
          />
        </Part>
      </Fieldset>
      <SubmitButton text="Submit" isAccent={true} />
    </Form>
  );
}

const Form = styled.form`
  padding: 0 10px;
`;

const Fieldset = styled.fieldset`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 30px 0;
  border: none;
  border-top: 1px solid black;
  position: relative;
`;

const Part = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 100%;
`;
