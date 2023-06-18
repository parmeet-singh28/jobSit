import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import ContactForm from '../ContactForm';

const SingleEvent = ({ data }) => {
  return (
    <div className="event_single_page">
      <h1> {data.title} </h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p> {data.description} </p>
      <ContactForm/>
    </div>
  );
};

export default SingleEvent;
