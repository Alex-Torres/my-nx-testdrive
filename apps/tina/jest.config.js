module.exports = {
  name: 'tina',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/tina',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
