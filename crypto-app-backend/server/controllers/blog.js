// const { Blog: BlogService } = require('../services');
// const {
//   submit: submitSchema,
//   updateStatus: updateStatusSchema,
// } = require('../dto-schemas');
// const Validator = require('../utils/validator');

// const updateStatus = async (req, res) => {
//   try {
//     const { body, params: { publicId }, user: { userId: createdBy } } = req;

//     const data = {
//       ...body, publicId, createdBy,
//     };

//     const { errors, data: validData } = Validator.isSchemaValid({ data, schema: updateStatusSchema });

//     if (errors) {
//       return res.badRequest('field-validation', errors);
//     }

//     const { doc } = await OrderService.updateStatus(validData);

//     if (doc) {
//       res.setHeader('message', 'successfully updated.');

//       return res.postRequest();
//     }

//     return res.notFound();
//   } catch (error) {
//     return res.serverError(error);
//   }
// };

// const submit = async (req, res) => {
//   try {
//     const { params: { publicId }, user: { userId: createdBy }, headers: { authorization } } = req;

//     const data = { publicId, createdBy };

//     const { errors, data: validData } = Validator.isSchemaValid({ data, schema: submitSchema });

//     if (errors) {
//       return res.badRequest('field-validation', errors);
//     }

//     const { doc } = await OrderService.submit(validData, authorization);

//     if (doc) {
//       res.setHeader('message', 'successfully submitted');

//       return res.postRequest();
//     }

//     return res.notFound();
//   } catch (error) {
//     return res.serverError(error);
//   }
// };

// const getList = async (req, res) => {
//   try {
//     const { query } = req;

//     const { pageSize, pageNumber, ...data } = query;

//     const limit = pageSize || 10;
//     const offset = limit * ((parseInt(pageNumber) || 1) - 1);

//     const { count, doc } = await OrderService.getList({ ...data, limit, offset });

//     res.setHeader('x-coreplatform-paging-limit', limit);
//     res.setHeader('x-coreplatform-total-records', count);

//     return res.getRequest(doc);
//   } catch (error) {
//     return res.serverError(error);
//   }
// };

// module.exports = {
//   updateStatus,
//   submit,
//   getList,
// };
