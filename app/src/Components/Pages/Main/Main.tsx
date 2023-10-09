import React, {useContext} from 'react';
import {ILangProvider, LangContext} from "../../../Providers/Lang-provider/Lang-provider";

const Main = () => {
  const {strings} = useContext<ILangProvider>(LangContext);
  return (
    <div>
      {strings.main_page_text}
    </div>
  );
};

export default Main;