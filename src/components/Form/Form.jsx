import { useState } from "react"
import { useFormInput } from "../../hooks/userFormInput"

export default function Form (){
    const firstNameProps = useFormInput("Filipe")
    const lastNameProps = useFormInput("Volz")
    return (
        <>
            <label>
                Fist name:
                <input {...firstNameProps}/>
            </label>
            <label>
                Last name:
                <input {...lastNameProps}></input>
            </label>
            <p>
                <b>
                    Bom dia, {firstNameProps.value} {lastNameProps.value}.
                </b>
            </p>
        </>
    )
}