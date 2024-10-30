import axios from "axios";

const URL = "http://localhost:8080/estudiante";

const URLCARRERAS = "http://localhost:8080/carrera";

const URLSEXO = "http://localhost:8080/sexo";

const api = axios.create({
    baseURL: URL
});

const apiCarreras = axios.create({
    baseURL: URLCARRERAS
});

const apiSexo = axios.create({
    baseURL: URLSEXO
});






// endpoint para todo lode estudiantes

const getAllEstudiantes = async () => {
    try {
        const response = await api.get("getAllEstudiantes");
        return response.data;
    } catch (error) {
        console.error("No se pudo encontrar la dirección", error);
        throw error;
    }

}

const addStudent = async (student) => {
    try {
        const response = await api.post("cargarEstudiante", student);
        return response.data;
    } catch (err) {
        console.error("No se pudo encontrar la dirección", err);
        throw err;
    }
}

const deleteStudent = async (id) => {
    try {
        const response = await api.delete(`borrarEstudianteById/${id}`);
        return response.data;
    } catch (err) {
        console.error("No se pudo encontrar la dirección", err);
        throw err;
    }
}


const searchMen = async () => {
    try {
        const response = await apiSexo.get("getBySexo/masculino");
        return response.data;
    } catch (err) {
        console.error("No se pudo encontrar la dirección", err);
        throw err;
    }
};

const searchWomen = async () => {
    try {
        const response = await apiSexo.get("getBySexo/femenino");
        return response.data;
    } catch (err) {
        console.error("No se pudo encontrar la dirección", err);
        throw err;
    }
};

// endpoint para traer todos los sexos

const searchAllSexos = async () => {
    try {
        const response = await apiSexo.get("getAllSexo");
        return response.data;
    } catch (err) {
        console.error("No se pudo encontrar la dirección", err);
        throw err;
    }
};



// endpoint para buscar todas las carreras

const searchAllCarreras = async () => {
    try {
        const response = await apiCarreras.get("getAllCarreras");
        return response.data;
    } catch (err) {
        console.error("No se pudo encontrar la dirección", err);
        throw err;
    }
};



const servicesAPI = {
    searchMen,
    searchWomen,
    searchAllSexos,
    searchAllCarreras,
    addStudent,
    deleteStudent,
    getAllEstudiantes
};

export default servicesAPI;
