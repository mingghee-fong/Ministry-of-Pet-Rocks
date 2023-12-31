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

  const obj = { owner: await db.getSingleOwner(id) }
  // console.log(obj.owner[0])
  let rockId = ''
  for (let item of obj.owner) {
    rockId = parseInt(item.rockTraitId)
  }

  const rockOwner = obj.owner[0]

  const ownersRock = { rocks: await db.getOwnersRocks(rockId, id) }

  const finalObj = {
    ...rockOwner,
    ...ownersRock,
  }
  // console.log(ownersRock)
  res.render('ownerid', finalObj)
})

export default router
