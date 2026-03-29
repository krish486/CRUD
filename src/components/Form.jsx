import { useForm } from "react-hook-form"
import { nanoid } from "nanoid/non-secure"

const Form = ({ datas, setDatas, setToggle, update, setUpdate }) => {
    let { register, reset, handleSubmit, formState } = useForm({
        mode: "onChange",
        defaultValues: { ...update }
    })
    let { errors } = formState

    return (
        <div className="min-h-[90%] w-full flex items-center justify-center flex-col gap-6 px-4">

            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center">
                Add a User
            </h1>

            <form
                onSubmit={handleSubmit((data) => {
                    if (update) {
                        setDatas((prev) => {
                            let updata = prev.map((item) => {
                                return item.id === update.id ? { ...item, ...data } : { ...item }
                            })
                            localStorage.setItem("users", JSON.stringify(updata));
                            return updata
                        })
                        setUpdate(null)
                    }
                    else {
                        let arr = [...datas, { ...data, id: nanoid() }];
                        setDatas(arr);
                        localStorage.setItem("users", JSON.stringify(arr));
                    }
                    setToggle(prev => !prev)
                    reset()
                })}
                className="w-full sm:w-[70%] md:w-[50%] lg:w-[30%] border border-white flex flex-col rounded-2xl gap-3 p-4 bg-gray-800"
            >

                <input
                    {...register("name", { required: "Please enter name" })}
                    className="bg-gray-700 p-2 text-base sm:text-lg text-white border border-white rounded-md placeholder:text-gray-300"
                    type="text"
                    placeholder="Employee Name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                <input
                    {...register("email", { required: "Please enter email" })}
                    className="bg-gray-700 p-2 text-base sm:text-lg text-white border border-white rounded-md placeholder:text-gray-300"
                    type="email"
                    placeholder="Employee Email"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                <input
                    {...register("mobile", {
                        required: "Please enter mobile number",
                        minLength: { value: 10, message: "Only 10 digits" },
                        maxLength: { value: 10, message: "Only 10 digits" }
                    })}
                    className="bg-gray-700 p-2 text-base sm:text-lg text-white border border-white rounded-md placeholder:text-gray-300"
                    type="number"
                    placeholder="Employee Mobile Number"
                />
                {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile.message}</p>}

                <input
                    {...register("designation", { required: "Please enter designation" })}
                    className="bg-gray-700 p-2 text-base sm:text-lg text-white border border-white rounded-md placeholder:text-gray-300"
                    type="text"
                    placeholder="Employee Designation"
                />
                {errors.designation && <p className="text-red-500 text-sm">{errors.designation.message}</p>}

                <input
                    {...register("empid", { required: "Please enter ID" })}
                    className="bg-gray-700 p-2 text-base sm:text-lg text-white border border-white rounded-md placeholder:text-gray-300"
                    type="text"
                    placeholder="Employee ID"
                />
                {errors.empid && <p className="text-red-500 text-sm">{errors.empid.message}</p>}

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 mt-2">
                    <label className="text-white text-base sm:text-lg flex items-center gap-2">
                        <input
                            {...register("role")}
                            type="radio"
                            value="Manager"
                        />
                        Manager
                    </label>

                    <label className="text-white text-base sm:text-lg flex items-center gap-2">
                        <input
                            {...register("role")}
                            type="radio"
                            value="Employee"
                        />
                        Employee
                    </label>
                </div>

                <button
                    className="mt-3 p-2 text-base sm:text-lg rounded-xl bg-blue-600 hover:bg-blue-700 font-medium text-white transition"
                >
                    Submit User
                </button>

            </form>
        </div >
    )
}

export default Form