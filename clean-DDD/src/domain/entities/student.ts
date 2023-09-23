import { randomUUID } from "crypto"

class Student {
  public id: string
  public name: string

  /**
   * Constructs a new instance of the class.
   *
   * @param {string} name - The name of the instance.
   * @param {string} [id] - Optional ID for the instance.
   */
  constructor(name: string, id?: string) {
    this.id = id ?? randomUUID()
    this.name = name
  }
}