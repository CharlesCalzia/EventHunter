import 'dart:async';

import 'index.dart';
import 'serializers.dart';
import 'package:built_value/built_value.dart';

part 'tech_record.g.dart';

abstract class TechRecord implements Built<TechRecord, TechRecordBuilder> {
  static Serializer<TechRecord> get serializer => _$techRecordSerializer;

  @nullable
  String get category;

  @nullable
  String get description;

  @nullable
  String get link;

  @nullable
  String get location;

  @nullable
  int get price;

  @nullable
  @BuiltValueField(wireName: 'start-date')
  String get startDate;

  @nullable
  @BuiltValueField(wireName: 'end-date')
  String get endDate;

  @nullable
  String get name;

  @nullable
  @BuiltValueField(wireName: kDocumentReferenceField)
  DocumentReference get reference;

  static void _initializeBuilder(TechRecordBuilder builder) => builder
    ..category = ''
    ..description = ''
    ..link = ''
    ..location = ''
    ..price = 0
    ..startDate = ''
    ..endDate = ''
    ..name = '';

  static CollectionReference get collection =>
      FirebaseFirestore.instance.collection('tech');

  static Stream<TechRecord> getDocument(DocumentReference ref) => ref
      .snapshots()
      .map((s) => serializers.deserializeWith(serializer, serializedData(s)));

  static Future<TechRecord> getDocumentOnce(DocumentReference ref) => ref
      .get()
      .then((s) => serializers.deserializeWith(serializer, serializedData(s)));

  TechRecord._();
  factory TechRecord([void Function(TechRecordBuilder) updates]) = _$TechRecord;

  static TechRecord getDocumentFromData(
          Map<String, dynamic> data, DocumentReference reference) =>
      serializers.deserializeWith(serializer,
          {...mapFromFirestore(data), kDocumentReferenceField: reference});
}

Map<String, dynamic> createTechRecordData({
  String category,
  String description,
  String link,
  String location,
  int price,
  String startDate,
  String endDate,
  String name,
}) =>
    serializers.toFirestore(
        TechRecord.serializer,
        TechRecord((t) => t
          ..category = category
          ..description = description
          ..link = link
          ..location = location
          ..price = price
          ..startDate = startDate
          ..endDate = endDate
          ..name = name));
