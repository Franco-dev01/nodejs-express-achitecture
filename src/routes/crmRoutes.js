import { addNewContact, deleteContact, getContacts, getContactWithId, putContact } from "../controller/crmController";

function routes(app) {
  app
    .route("/contact")
    .get((req, res, next) => {
        
        //middleware
      console.log(`Request: ${req.originalUrl}`);
      console.log(`res: ${req.method}`);
      next();
    }, getContacts)
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    .get(getContactWithId)
    .put(putContact)
    .delete(deleteContact);
}
export default routes;
