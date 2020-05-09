module.exports = {
  name: 'sample-starter-uikit',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/sample-starter-uikit',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
