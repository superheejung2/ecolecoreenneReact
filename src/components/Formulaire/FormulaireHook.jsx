import Select from "react-select";
import { useForm, useController } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { string, z } from "zod"
import styles from './FormulaireHook.module.css'
import axios from 'axios';

const SERVER_URL = 'http://localhost:8000/contact';


export default function FormulaireHook({ onSave, user = {} }) {


    const schema = z.object({
        name: string().min(1, { message: "Au moins un charateur est demandé." }),
        email: string().email(),
        object: string().min(1, { message: 'Veillez choisir votre objet de demand' }),
    });

    const objectOptions = [
        { value: "cours", label: "Concernant le cours" },
        { value: "partenariat", label: "Partenariat" },
        { value: "autre", label: "Autre" },
    ]

    // countryOptions

    const { register, control, handleSubmit, formState } = useForm({
        defaultValue: user,
        resolver: zodResolver(schema),
    });

    const { errors } = formState

    const { field } = useController({ name: 'object', control })


    const handleSelectChange = (option) => {
        field.onChange(option.value)
    }

    const handleSave = (formValues) => {
        onSave(formValues);
    }


    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit(handleSave)} className={styles.form}>
                <div>
                    <p>Nom*</p>
                    <input {...register('name')} />
                    <div>{errors.name?.message}</div>
                </div>
                <div>
                    <p>Email*</p>
                    <input {...register("email")} />
                    <div>{errors.email?.message}</div>
                </div>
                <div>
                    <p>Objet de la demande</p>
                    <Select
                        value={objectOptions.find(({ value }) => value === field.value)}
                        onChange={handleSelectChange}
                        options={objectOptions}
                    />
                    <div>{errors.object?.message}</div>
                </div>

                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        </div>
    )
}