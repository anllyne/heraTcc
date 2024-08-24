const { db } = require('../config/firebase');

class Cycle {
  constructor(uid, dataInico, dataFim, sintomas) {
    this.uid = uid;
    this.dataInico = dataInico;
    this.dataFim = dataFim;
    this.sintomas = sintomas;
  }

  async save() {
    const cycleRef = db.collection('ciclo').doc(this.uid).collection('ciclo').doc();
    return await cycleRef.set({
      dataInico: this.dataInico,
      dataFim: this.dataFim,
      sintomas: this.sintomas,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
  }

  static async getAllCycles(uid) {
    const cycles = [];
    const snapshot = await db.collection('ciclo').doc(uid).collection('ciclo').get();
    snapshot.forEach(doc => cycles.push({ id: doc.id, ...doc.data() }));
    return cycles;
  }
}

module.exports = Cycle;
