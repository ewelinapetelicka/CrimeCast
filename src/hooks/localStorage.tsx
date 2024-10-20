import {useEffect, useState} from "react";

export function useLocalStorage<T>(key: string, defaultValue?: T) {
    const [itemByKey, setItemByKey] = useState<any>(undefined);

    useEffect(() => {
        let value = localStorage.getItem(key)
        if (!value) {
            setItemByKey(defaultValue);
            return;
        }
        let newValue = JSON.parse(value) as T;
        setItemByKey(newValue);
    }, []);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(itemByKey))
    }, [itemByKey]);


    return [itemByKey, setItemByKey]
}
