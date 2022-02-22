import express from 'express'
import { User } from '../../models/req-models/user.model'
import { validateBody, validateParams, validateQuery } from '../../validation/validation'
import { AuthController } from './auth.controller'

export const authRoutes = express.Router()

// auth/login
authRoutes.post('/login', validateBody(User),  AuthController.Login)

// auth/query
authRoutes.post('/query', validateQuery(['name', 'age']), AuthController.TestQuery)

// auth/params
authRoutes.post('/params/:id', validateParams, AuthController.TestParams)