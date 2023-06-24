import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class SnapshotsController {
  public async index ({ request, response }: HttpContextContract) {
    // Request body template
    /**
     * {
     *  "date": dd-mm-yyyy
     * }
     * */
    if(!request.qs()) {
      return response.badRequest(
        {
          code: 400,
          message: 'Bad Request',
          errors: {
            body: 'Body is required',
          },
        }
      )
    }
    const snapshotDate = request.qs().date
    console.log(request.qs())
    const snapshots = await Database.from('snapshots').where('date', snapshotDate)
    if(!snapshots.length) {
      return response.badRequest(
        {
          code: 400,
          message: 'Bad Request',
          errors: {
            body: 'Snapshot not found',
          },
        }
      )
    }
    return response.ok(snapshots)
  }
}
