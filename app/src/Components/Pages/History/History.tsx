import React, {useContext} from 'react';
import {ILangProvider, LangContext} from "../../../Providers/Lang-provider/Lang-provider";
import {IStringConfig} from "../../../Langs/Ru";

const History = () => {
  const { strings }: {strings: IStringConfig } = useContext<ILangProvider>(LangContext);

  return (
    <div className="history">
      {strings.history_text}
    </div>
  );
};

export default History;