import Contact from '../model/contact';

export const updateContact = async (contactId, body) => {
  const result  = await Contact.findByIdAndUpdate(
    contactId,
    {  ...body },
    { new: true }
  );
  console.log(result);
  return result;
};
