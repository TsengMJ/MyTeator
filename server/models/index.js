const Customer = require('./customer');
const Product = require('./product')
const CustomerInfo = require('./customer_info')
const Experience = require('./experience')
const Language = require('./language')
const ServiceInfo = require('./service_info')
const Portfolio = require('./portfolio')
const CaseInfo = require('./case_info')
const Transaction = require('./transaction')
const Blog = require('./blog')

const modals = {
  Customer,
  Product,
  CustomerInfo,
  Experience,
  Language,
  ServiceInfo,
  Portfolio,
  CaseInfo,
  Transaction,
  Blog
};

module.exports = modals;
