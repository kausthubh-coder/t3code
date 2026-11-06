package expo.modules.t3composereditor

import org.junit.Assert.assertEquals
import org.junit.Assert.assertNull
import org.junit.Test

class ComposerControlledDocumentTest {
  @Test
  fun `a document older than the latest native edit is dropped`() {
    assertNull(acceptControlledDocument(ComposerRevision(5, 0), ComposerRevision(4, 0)))
  }

  @Test
  fun `a current document applies without moving the revision`() {
    assertEquals(
      ComposerRevision(5, 0),
      acceptControlledDocument(ComposerRevision(5, 0), ComposerRevision(5, 0)),
    )
  }

  @Test
  fun `a send clear applies over edits typed after Return and restarts the revision`() {
    assertEquals(
      ComposerRevision(4, 1),
      acceptControlledDocument(ComposerRevision(6, 0), ComposerRevision(4, 1)),
    )
  }

  @Test
  fun `a clear the editor already applied does not apply again`() {
    assertNull(acceptControlledDocument(ComposerRevision(6, 1), ComposerRevision(4, 1)))
  }
}
