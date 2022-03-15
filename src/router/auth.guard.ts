// import store from "./../store/store";
// import { setSnackbarError } from "../utils/utils";

export const authorizationGuard = (to:any, from:any, next:any) => {
  const guardAction:any =  async () => {
await store.dispatch("auth/loadAuthCookie").then(async (response:any) => {
      const isAuthenticated = true;

      const userRoleList = store.state.auth.userRoleList;
      if (isAuthenticated) {
        // if (store.state.auth.userRoleList.length <= 0) {
        //   await store.dispatch("auth/loadUserRoleList").then(async (response) => {
        //     userRoleList = response;
        //   });
        // }
        if (userRoleList.length > 0) {
          if (to.meta && to.meta.authorize.length > 0) {
            let isValidRequest = true;
            for await (const userRole of userRoleList) {
              const containRole = to.meta.authorize.find((s:any) => {
                return s == userRole;
              });
              if (!containRole) {
                isValidRequest = false;
              }
            }
            if (isValidRequest) {
              return next();
            } else {
              next({ name: "Error" });
              // setSnackbarError("Yetkisiz Giriş!");
            }
          } else {
            return next();
          }
        } else {
          next({ name: "Error" });
          // setSnackbarError("Yetkisiz Giriş!");
        }
      } 
    //   else {
    //     window.location = "http://localhost:5011/login";
    //   }
    });
  }
  return guardAction();
};