import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Snapshot from 'App/Models/Snapshot'

export default class extends BaseSeeder {
  public async run () {
    await Snapshot.createMany([
      {
        date: '16-6-2023',
        link: 'https://www.google.com',
      },
    ])
  }
}
