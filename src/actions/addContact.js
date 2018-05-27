let contacts = []

export const addContact = (contact) => ({
    type: 'ADD_CONTACT',
    contacts: [contact, ...contacts]
})
