## Angular Module Seperation

- Using Angular Module Federation
- It also has nginx config if we want to use the first approach .

Main Reference for module federation Implementation
https://www.angulararchitects.io/en/aktuelles/the-microfrontend-revolution-part-2-module-federation-with-angular/

Structure of Angular Project

 - app-home is Portal Arzi 
   - Login
   - Logout
   - Menu/Navigation Bar
   - Load Main CSS
   - Share Library [Angular, Core, Component, Template Library]
 - app-swt 
   - Use Same Template Library, Core and Component to be independent deployable
   - Expose following modules
     - /fish
     - /import-request
     - /optimization
     - /rms
 - app-bim
   - Use Same template Library , Core and Component to be independent deployable
     - /bim
     - /um
     - /fxd
     - /account
 
    

In Local Development, we can use each application indepdently
 - In Test Environment, we have to make sure integration works between shell and remote 
   - No Library Conflict 


Question:
 - How to share Asset/Images between shell and remote 



