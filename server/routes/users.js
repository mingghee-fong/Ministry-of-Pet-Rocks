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
  const obj = { owners: await db.getOwners() }

  res.render('owners', obj)
})

router.get('/owners/:id', async (req, res) => {
  const id = req.params.id
  // const owner = await db.getSingleOwner(id)
  const owner = { owners: await db.getSingleOwner(id) }
  console.log(owner)
  res.render('ownerid', owner)
})

export default router
