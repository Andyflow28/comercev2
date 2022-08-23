import { useState } from "react";
import { useRouter } from "next/router";
import NavKeyKey from "./NavKeyKey";
import NavOpenKey from "./NavOpenKey";
import NavKeyOpen from "./NavKeyOpen";
import NavOpenOpen from "./NavOpenOpen";
import axios from "axios";

export const NavBarSession = ({ children }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const router = useRouter()

  const logout = async () => {
    const response = await axios.post('/api/auth/logout')
    router.push('/SignIn')
  }

    if (openMenu === false && openSearch === false) {
      return (
        <NavKeyKey setFuctionMenu={setOpenMenu} Menu={openMenu} setFuctionElement={setOpenSearch} variableElement={openSearch}/>
      );
    } else if (openMenu === true && openSearch === false) {
      return (
        <NavOpenKey setFuctionMenu={setOpenMenu} Menu={openMenu} setFuctionElement={setOpenSearch} variableElement={openSearch}/>
      );
    } else if (openMenu === false && openSearch === true) {
      return (
        <NavKeyOpen setFuctionMenu={setOpenMenu} Menu={openMenu} setFuctionElement={setOpenSearch} variableElement={openSearch} SignOutFunction={logout}/>
      );
    } else if (openMenu === true && openSearch === true) {
      return (
        <NavOpenOpen setFuctionMenu={setOpenMenu} Menu={openMenu} setFuctionElement={setOpenSearch} variableElement={openSearch} SignOutFunction={logout}/>
      );
    }
};

export default NavBarSession;
