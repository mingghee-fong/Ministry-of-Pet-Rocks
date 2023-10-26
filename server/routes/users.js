import express from 'express'

import * as db from '../db/db.js'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    // const users = await db.getUsers()
    res.render('home')
  } catch (err) {
    res.status(500).send('DATABASE ERROR: ' + err.message)
  }
})

router.get('/owners', async (req, res) => {
  const owners = await db.getOwners()
  res.render('owners', owners)
})

router.get('/:id', async (req, res) => {
  
})
export default router
