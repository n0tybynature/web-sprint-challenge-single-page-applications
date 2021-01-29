import * as yup from "yup"

export default yup.object().shape({
    name: yup
        .string()
        .required("Name is required"),
    style: yup
        .string()
        .oneOf(["sicilian", "detriot", "newyork", "chicago"], "Style is required"),

    size: yup
        .string()
        .oneOf(["small","medium", "large", "x-large"],"Size is required"),

    sauce: yup
        .string()
        .oneOf(["redSauce", "whiteSauce", "noSauce"], "Sauce is required"),
    pepperoni: yup.boolean(),
    extraCheese: yup.boolean(),
    sausage: yup.boolean(),
    mushroom: yup.boolean(),

    instruction: yup
        .string(),

    quantity: yup 
        .string()
        .oneOf(["one","two","three","four"],"Quantity is required")
})