"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var paciente_repository_1 = __importDefault(require("./paciente.repository"));
function getPacientes() {
    return paciente_repository_1.default.getPacientes();
}
;
function getPacienteById(id) {
    var paciente = paciente_repository_1.default.getPacienteById(id);
    if (paciente != undefined) {
        return paciente;
    }
    else
        return null;
}
function addPaciente(paciente) {
    return paciente_repository_1.default.addPaciente(paciente);
}
exports.default = { getPacientes: getPacientes, getPacienteById: getPacienteById, addPaciente: addPaciente };
