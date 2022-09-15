import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import Input from '../Input';
import Text from '../Text';
import Textarea from '../Textarea';
import Button from '../Button';
import Modal from '../Modal';
import { sendMessageToTelegram } from '../../utils';

import styles from './styles/_contactsForm.module.scss';

const ContactsForm = () => {
  const [isShowModalInfo, setIsShowModalInfo] = useState(false);
  const { register, reset, handleSubmit, formState: { errors }} = useForm();

  const showModalPopup = () => {    
    setIsShowModalInfo(true);
    setTimeout(() => setIsShowModalInfo(false), 3000);
  }

  const onSendContactsForm = async(data) => {
    const messageText = 'Имя клиента: ' + data.user_name + '\nEmail клиента: ' + data.user_email + '\nСообщение клиента: ' + data.user_message;
    
    await sendMessageToTelegram(messageText)
    .then((result) => {
      if(result?.messageId) {
        reset();
        showModalPopup();
      }
    }).catch((error) => {
      console.error(error);
    });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSendContactsForm)}>
        <div className={styles.contactsForm}>
          <Input
            inputType="text"
            placeholder="Your name"
            validation={register("user_name", { required: true })}
            className={styles.contactsForm__input}
            errorMessage={errors.user_name && 'You have to specify your name'}
          />
          <Input
            inputType="email"
            placeholder="Your email"
            validation={register("user_email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i })}
            className={styles.contactsForm__input}
            errorMessage={errors.user_email && 'You have to specify your email'}
          />
          <Textarea
            placeholder="Your message"
            validation={register("user_message", { required: true })}
            className={styles.contactsForm__textarea}
            errorMessage={errors.user_message && 'You have to specify your message'}
          />
          <Button
            buttonTitle="Submit"
            isSubmit
          />
        </div>
      </form>
      <Modal
        show={isShowModalInfo}
        isPopupInfo
      >
        <Text>Thanks for the message. I will definitely answer you.</Text>
      </Modal>
    </>
  );
};

export default ContactsForm;