import React, {createContext, JSX, useEffect, useState} from 'react';
import {IStringConfig, RU} from '../../Langs/Ru';
import {EN} from "../../Langs/En";

export interface ILangProvider {
  strings: IStringConfig
  isRussian: boolean
  setIsRussian: (value: any) => void
}

const defaultValue = {
  strings: null
}

export const LangContext = createContext<ILangProvider>(defaultValue as ILangProvider)

export const LangProvider = ({children} : {
  children: React.ReactElement
} ) : JSX.Element => {
  const config = useLangContext();
  return (
    <LangContext.Provider value={config}>
      {children}
    </LangContext.Provider>
  )
}

export const useLangContext = ():ILangProvider => {
  const [strings, setStrings] = useState<IStringConfig>(RU);
  const [isRussian, setIsRussian] = useState(true);

  useEffect(()=> {
    if (isRussian) {
      setStrings(RU);
    } else {
      setStrings(EN);
    }
  }, [isRussian]);

  return {
    strings,
    setIsRussian,
    isRussian
  }
}