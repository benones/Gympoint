import * as Yup from 'yup'; // yarn add yup
import Students from '../models/Students';

class StudentsController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      idade: Yup.string().required(),
      peso: Yup.string().required(),
      altura: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Falha na Validação' });
    }

    const studentsExists = await Students.findOne({
      where: { email: req.body.email },
    });

    if (studentsExists) {
      return res.status(400).json({ error: 'Usuário já existe' });
    }

    const { id, name, email, idade, peso, altura } = await Students.create(
      req.body
    );

    return res.json({
      id,
      name,
      email,
      idade,
      peso,
      altura,
    });
  }

  async update(req, res) {
    const { email } = req.body;
    const studentsExists = await Students.findOne({
      where: { email },
    });
    if (studentsExists) {
      const { id, name, idade, peso, altura } = await studentsExists.update(
        req.body
      );

      return res.json({
        id,
        name,
        email,
        idade,
        peso,
        altura,
      });
    }
    return res.status(400).json({
      error: 'Usuário não existente',
    });
  }
}

export default new StudentsController();
